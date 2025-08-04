'use client'

const projects = [
    {
        title: 'Next word predictor',
        link: '',
        description: 'A Next Word Predictor is a type of language model that predicts the most probable next word based on the given input text. It is commonly built using LSTMs (Long Short-Term Memory) or Transformers in PyTorch',
        image: ''
    }
]

function Project({ title, description, link, image }) {
    return (
        <div className="mt-9 p-3 w-[21.5rem] h-[27rem] border rounded-2xl white-blur ">
            <h4 className="mt-3 ml-2 font-chakraPetch text-xl font-semibold">
                {title}
            </h4>

            <p className="mt-5 p-1 pl-2">
                {description}
            </p>
        </div>
    )
}

function Projects() {
    return (
        <div className="mt-[4rem] m-2">
            <h2 className="text-3xl font-medium font-chakraPetch">My Projects</h2>
            
            {projects.map((project) => (
                <Project
                title={project.title}
                description={project.description}
                key={project.title}
            />
            ))}
            
        </div>
    )
}

export default Projects
