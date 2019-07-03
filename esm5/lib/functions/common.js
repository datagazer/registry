export function isVoid(value) {
    return value === undefined || value === null;
}
export function toBoolean(value) {
    if (!isVoid(value)) {
        return Boolean(value);
    }
    return null;
}
export function toNumber(value) {
    if (!isVoid(value)) {
        return Number(value);
    }
    return null;
}
export function toString(value) {
    if (!isVoid(value)) {
        return String(value);
    }
    return null;
}
export function toDate(value) {
    if (typeof value === 'string' || typeof value === 'number' || value instanceof Date) {
        var localDate = new Date(value);
        return new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(), localDate.getHours(), localDate.getMinutes(), localDate.getSeconds(), localDate.getMilliseconds()));
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhdGFnYXplci9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2Z1bmN0aW9ucy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFjO0lBQ25DLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQWM7SUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2QjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBYztJQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFjO0lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWM7SUFDbkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7UUFDbkYsSUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsT0FBTyxJQUFJLElBQUksQ0FDYixJQUFJLENBQUMsR0FBRyxDQUNOLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFDdkIsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUNwQixTQUFTLENBQUMsT0FBTyxFQUFFLEVBQ25CLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFDcEIsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUN0QixTQUFTLENBQUMsVUFBVSxFQUFFLEVBQ3RCLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FDNUIsQ0FDRixDQUFDO0tBQ0g7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNWb2lkKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgdm9pZCB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB8IG51bGwge1xuICBpZiAoIWlzVm9pZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiB1bmtub3duKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmICghaXNWb2lkKHZhbHVlKSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyh2YWx1ZTogdW5rbm93bik6IHN0cmluZyB8IG51bGwge1xuICBpZiAoIWlzVm9pZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKHZhbHVlOiB1bmtub3duKTogRGF0ZSB8IG51bGwge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIGxldCBsb2NhbERhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICBEYXRlLlVUQyhcbiAgICAgICAgbG9jYWxEYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGxvY2FsRGF0ZS5nZXRNb250aCgpLFxuICAgICAgICBsb2NhbERhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICBsb2NhbERhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgbG9jYWxEYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgbG9jYWxEYXRlLmdldFNlY29uZHMoKSxcbiAgICAgICAgbG9jYWxEYXRlLmdldE1pbGxpc2Vjb25kcygpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIl19