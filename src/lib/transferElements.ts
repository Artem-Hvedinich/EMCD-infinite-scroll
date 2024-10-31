export function transferElements<T>(sourceArray: T[], targetArray: T[], count: number): void {
    for (let i = 0; i < count; i++) {
        const element = sourceArray.shift(); // Удаляем элемент с начала sourceArray
        if (element !== undefined) {
            targetArray.push(element); // Добавляем элемент в конец targetArray
        }
    }
}
