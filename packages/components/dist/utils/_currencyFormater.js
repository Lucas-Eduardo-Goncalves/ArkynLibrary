export function valueDisplay(inputValue) {
    const value = (inputValue / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return value;
}
const VALID_FIRST = /^[1-9]{1}$/;
const VALID_NEXT = /^[0-9]{1}$/;
const DELETE_KEY_CODE = 8;
export function onKeyDown(e, inputValue, handleChange, max) {
    const { key, keyCode } = e;
    if ((inputValue === 0 && !VALID_FIRST.test(key)) ||
        (inputValue !== 0 && !VALID_NEXT.test(key) && keyCode !== DELETE_KEY_CODE)) {
        return;
    }
    const valueString = inputValue.toString();
    let nextValue;
    if (keyCode !== DELETE_KEY_CODE) {
        const nextValueString = inputValue === 0 ? key : `${valueString}${key}`;
        nextValue = Number.parseInt(nextValueString, 10);
    }
    else {
        const nextValueString = valueString.slice(0, -1);
        nextValue =
            nextValueString === "" ? 0 : Number.parseInt(nextValueString, 10);
    }
    if (nextValue > Number(max)) {
        return;
    }
    handleChange(nextValue);
}
