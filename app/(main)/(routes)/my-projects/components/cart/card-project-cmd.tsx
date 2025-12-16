"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code2, Star } from "lucide-react"

// Assuming this is the project type based on your code
interface Project {
    id: string | number
    title: string
    description: string
    image?: string
    link?: string
    tech?: string[]
    featured?: boolean
}

interface CardProjectCmdProps {
    project: Project
}

const CardProjectCmd = ({ project }: CardProjectCmdProps) => {
    // Extract tech stack from description or use default if not available
    const techStack = project.tech || ["React", "Next.js"]

    // Generate a gradient color based on project id
    const gradients = [
        "from-green-400 to-green-600",
        "from-blue-400 to-blue-600",
        "from-purple-400 to-purple-600",
        "from-pink-400 to-pink-600",
        "from-red-400 to-red-600",
    ]

    const gradientIndex =
        typeof project.id === "number"
            ? project.id % gradients.length
            : Number.parseInt(String(project.id).replace(/\D/g, "")) % gradients.length || 0

    const gradient = gradients[gradientIndex]

    return (
        <div className="p-1">
            <Card className="overflow-hidden border-0 shadow-lg">
                <div className="grid md:grid-cols-2 gap-0">
                    {/* Project Image/Logo */}
                    <div className="relative h-64 md:h-80">
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            {project.image ? (
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <Code2 className="w-20 h-20 text-white/80" />
                            )}
                        </div>
                        {project.featured && (
                            <Badge className="absolute top-4 right-4 bg-yellow-500 text-black">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                            </Badge>
                        )}
                    </div>

                    {/* Project Details */}
                    <div className="p-6 md:p-8 flex flex-col justify-between bg-black/90">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {techStack.map((tech, index) => (
                                    <Badge key={index} variant="secondary" className="bg-white/10 text-white border-white/20">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        {project.link && (
                            <Button
                                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 w-full sm:w-auto"
                                onClick={() => window.open(project.link, "_blank")}
                            >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Project
                            </Button>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CardProjectCmd
