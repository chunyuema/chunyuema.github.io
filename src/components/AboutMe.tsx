import React from "react";
import NameCard from "./NameCard";

const AboutMe: React.FC = () => (
    <div className="container mx-auto mt-36 mb-20 px-4 max-w-[1100px]">
        {/* ======= TOP SECTION ======= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-4 flex items-center justify-center">
                <NameCard name="Chunyue Ma" title="Software Engineer @ AWS Lambda" />
            </div>

            <div className="md:col-span-8">
                <div className="glass-panel h-full p-6">
                    <p className="mb-4 leading-relaxed text-gray-200">
                        Hello World! I'm Chunyue, a software engineer passionate about
                        understanding how code, machines, and software systems work under
                        the hood. My key interest is exploring availability and resilience
                        in large-scale software systems. I'm fascinated by how these
                        complex projects maintain functionality while continuing to evolve
                        and deliver high performance.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-200">
                        I'm also drawn to the observability of cloud-native/distributed
                        systems and whether we can truly understand the root causes of
                        production issues and respond accurately and quickly.
                    </p>
                    <p className="mb-0 leading-relaxed text-gray-200">
                        Recently, I've been exploring green software engineering and
                        high-performance computing. With today's growing demand for
                        software and AI, I believe it's time for software engineers to be
                        more proactive in addressing these challenges.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default AboutMe;
