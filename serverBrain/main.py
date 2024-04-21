
from fastapi import FastAPI
from llm import format_diagnose, index_diagnose_db, chat
from dto import DiagnoseRequest, PlaygroundRequest, ChatRequest

app = FastAPI()


# routes not protected

@app.get("/")
async def root():
    return {"message": "hello"}


@app.post("/index/diagnose/{id}")
async def diagnose(id: str, diagnose: DiagnoseRequest):
    index_diagnose_db(id, diagnose)
    return { "message" : "success"}

@app.post("/chat/{id}")
async def diagnose(id: str, req: ChatRequest):
    res =  chat(id, req.message)
    return { "reply" : res}

# @app.post("/playground")
# async def diagnose(req: PlaygroundRequest):
#     return index_diagnose_db(req.name)



