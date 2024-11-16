import Image from 'next/image'
import profileImage from '../../src/app/resources/img.jpeg'

export default function AboutMe() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/3">
                <Image
                    src={profileImage}
                    alt="Tordar Tømmervik"
                    width={300}
                    height={300}
                    className="rounded-full"
                />
            </div>
            <div className="md:w-2/3">
                <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                <p className="text-muted-foreground mb-4">
                    I&apos;m a full-stack developer with experience in React, Next.js, and modern web technologies.
                    I&apos;m a largely self-taught developer, after beginning to learn Python during the pandemic, to accomodate
                    my degree in international relations. 
                </p>
                <p className="text-muted-foreground mb-4">
                    When I&apos;m not coding, you can find me:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Running</li>
                    <li>Cooking</li>
                    <li>Taking pictures</li>
                    <li>Going to concerts</li>
                    <li>Planning a new adventure</li>
                </ul>
                {/*<Button asChild>
                    <a href="/Tordar_Tommervik_CV.pdf" target="_blank" rel="noopener noreferrer">View My CV</a>
                </Button>*/}
            </div>
        </div>
    )
}