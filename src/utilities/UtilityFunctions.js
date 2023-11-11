function hasExccededDeadline(toTimeString)
{
    const toTime = new Date(toTimeString)
    const now = new Date()
    return now > toTime
}

export default hasExccededDeadline;