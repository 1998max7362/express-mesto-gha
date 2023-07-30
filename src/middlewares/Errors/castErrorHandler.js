
const moderlToErrorMap = {
    user: "Передан некорректный id пользователя",
    card: "Передан некорректный id карточки",
}

const modelToErrorMapper = (modelName) =>{
    return moderlToErrorMap[modelName]
}

export const castErrorHandler = (err, req, res) =>{
    const modelName = err.model.modelName
    res.status(404).send({message: modelToErrorMapper(modelName)})
}