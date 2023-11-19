export function generateCSS(props) {
    const { isChecked, size, gradientLeftColor } = props;
    function backgroundAnimation() {
        let transform = "";
        if (isChecked)
            transform = `translateX(-${size / 2}px)`;
        if (!isChecked)
            transform = `translateX(-${size * 2 - size / 2}px)`;
        return { transform };
    }
    const container = {
        borderRadius: 99999,
        minWidth: size * 2,
        maxWidth: size * 2,
        minHeight: size,
        maxHeight: size,
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
        border: "none",
        cursor: "pointer",
    };
    const background_container = {
        background: `linear-gradient(to right,  ${gradientLeftColor} 50%, var(--slate-200) 50%)`,
        flex: 1,
        minWidth: size * 4,
        maxWidth: size * 4,
        minHeight: size,
        maxHeight: size,
        position: "absolute",
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        transition: "all 0.1s",
    };
    const circle_container = {
        background: "white",
        position: "absolute",
        top: "0",
        bottom: "0",
        zIndex: 2,
        minHeight: size,
        maxHeight: size,
        border: `4px solid ${gradientLeftColor}`,
        minWidth: size,
        maxWidth: size,
        borderRadius: 99999,
        left: "calc(50%)",
        transform: "translateX(-50%)",
    };
    return {
        container,
        background_container,
        circle_container,
        background_animation: backgroundAnimation(),
    };
}
