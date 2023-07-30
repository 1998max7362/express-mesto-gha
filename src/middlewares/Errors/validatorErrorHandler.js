export const validatorErrorHandler = (err, req, res) =>{
    //Тут хотел добавить вытаскивание из сообщения ошибки конкретного поля, но стало уже слишком лень.
    res.status(400).send({error: true, errorMessage: 'Переданы некорректные данные'})
}