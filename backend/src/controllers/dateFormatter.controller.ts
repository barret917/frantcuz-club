/**
 * Форматирует дату в русском формате (день месяц год)
 */
export const formatDate = (dateString: string | Date): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};

/**
 * Форматирует время (часы:минуты)
 */
export const formatTime = (dateString: string | Date): string => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit'
    });
};