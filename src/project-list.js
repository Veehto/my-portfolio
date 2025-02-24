export const setupProjectList = (element) => {
    let projects = [];

    const setProjects = (newProjects) => {
        projects = newProjects;
        element.innerHTML = projects.map(project => `
            <div class="project-pad">
                <details class="project">
                    <summary>
                        <h4>${project.language}</h4>
                        <h3>${project.title}</h3>
                    </summary>
                    <p><a href=${project.link} target="_blank">
                        ${project.description}
                    </a></p>
                </details>
            </div>
        `);
    };

    setProjects([]);

    return {
        setProjects
    };
};