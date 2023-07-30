
const moderlToErrorMap = {
    user: "Запрашиваемый пользователь не найден",
    card: "Запрашиваемая карточка не найдена",
}

const modelToErrorMapper = (modelName) =>{
    return moderlToErrorMap[modelName]
}

export const castErrorHandler = (err, req, res) =>{
    const modelName = err.model.modelName
    res.status(404).send({message: modelToErrorMapper(modelName)})
}