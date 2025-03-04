import Image from 'next/image'
import profileImage from '../../src/app/resources/img.jpeg'
import { Button } from '@/components/ui/button'

export default function AboutMe() {
    return (
        <section  className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/3">
                <div className="flex flex-col items-center">
                    <Image
                        src={profileImage}
                        alt="Tordar Tømmervik"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                    <div className="mt-4 w-full max-w-[300px]">
                        <Button 
                            asChild 
                            variant="outline" 
                            className="w-full bg-white hover:bg-gray-100 border-gray-300"
                        >
                            <a 
                                href="/Tordar_Tommervik_CV.pdf" 
                                download 
                                className="flex items-center justify-center gap-2 !text-black hover:!text-black"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    className="!text-black"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download CV
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="md:w-2/3">
                <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                <p className="text-muted-foreground mb-4">
                    I&apos;m a full-stack developer with experience in React, Next.js, and modern web technologies.
                    I&apos;m a largely self-taught developer, after beginning to learn Python during the pandemic,
                    to accomodate my degree in international relations. From there, I went on to work for Norwegian
                    Red Cross, maintaining their in-house developed web application Nyss. 
                    I also enjoy working on different side-projects, learning new technologies, and keeping up to date
                    with new developments and ways of making things.
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
            </div>
        </div>
        </section>
    )
}