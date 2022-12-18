import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const buttonRef = useRef();
    const handleClickButton = () => {
        buttonRef.current.children[0].innerText = "text";
        buttonRef.current.style.height = "80px";
        buttonRef.current.style.width = "150px";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={buttonRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={buttonRef}>Блок</small>
            </div>
            <button className="btn btn-warning mr-5" onClick={handleClickButton}>Click</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
