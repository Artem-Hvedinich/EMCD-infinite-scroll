export function filterNum(value: string) {
    if (!/^\d+$/.test(value)) {
        return value.replace(/[^\d]/g, '');
    }
    return value
}
