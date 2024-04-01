from fastapi import FastAPI, WebSocket
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from asyncio import sleep

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

websocket_connections = set()
camera_websocket_connections = set()

@app.get("/")
async def get_index():
    return FileResponse("pruebitas.html")

@app.post("/camera")
async def camera(response: dict):
    global camera_websocket_connections
    valor = list(response.values())[0]
    camera_websocket_connections = websocket_connections.copy()
    for connection in camera_websocket_connections:
        await connection.send_text(str(valor))

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    # Aceptar la conexión WebSocket
    await websocket.accept()
    
    # Agregar la conexión WebSocket a la lista general
    websocket_connections.add(websocket)

    try:
        # Bucle para manejar mensajes entrantes
        while True:
            # Leer mensaje del cliente
            data = await websocket.receive_text()
            # Enviar mensaje a todos los clientes conectados
            for connection in camera_websocket_connections:
                await connection.send_text(data)
    finally:
        # Eliminar la conexión WebSocket cuando se cierra
        websocket_connections.remove(websocket)
