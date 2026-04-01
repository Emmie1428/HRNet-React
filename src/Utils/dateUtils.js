export const formatDate = (date) => {
    if (!date) return ""
    return date.toISOString().split("T")[0]
}

export const parseDate = (str) => str ? new Date(str + "T00:00:00") : null