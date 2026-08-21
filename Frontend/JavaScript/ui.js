// ================= UI MODULE =================


export function showMessage(message) {

    alert(message);

}


export function getInputValue(id) {

    const element =
        document.getElementById(id);

    return element
        ? element.value.trim()
        : "";

}


export function setText(id, text) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent = text;

    }

}


export function redirect(page) {

    window.location.href = page;

}


export function showPassword(
    inputId,
    checkboxId
) {

    const password =
        document.getElementById(inputId);

    const checkbox =
        document.getElementById(checkboxId);


    if (
        !password ||
        !checkbox
    ) {

        return;

    }


    checkbox.addEventListener(
        "change",
        () => {

            password.type =
                checkbox.checked
                    ? "text"
                    : "password";

        }
    );

}


export function renderCourses(
    courses,
    containerId
) {

    const container =
        document.getElementById(containerId);


    if (!container) {

        return;

    }


    courses.forEach(course => {

        container.innerHTML += `

            <tr>

                <td>${course.name}</td>

                <td>${course.category}</td>

                <td>${course.instructor}</td>

                <td>

                    <a
                        href="edit-course.html"
                        class="btn"
                        style="
                            background:#facc15;
                            color:black;
                        "
                    >
                        Edit
                    </a>

                </td>

            </tr>

        `;

    });

}