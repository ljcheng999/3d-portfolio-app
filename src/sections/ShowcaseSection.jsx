import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a
                href="https://github.com/ljcheng999/capi-gitops"
                alt="Click to visit downstream cluster manifests"
                target="_blank"
              >
                <img
                  src="/images/project1-capi-1.png"
                  alt="capi-cluster-manifest"
                />
              </a>
            </div>
            <div className="text-content">
              <h2>
                CI/CD pipelines with Infrastrucure are great but GitOps
                Declarative ways could be better!
              </h2>
              <p className="text-white-50 md:text-xl">
                An Stack build with Cluster API (CAPI), ArgoCD (GitOps), & Git
                for a fast Kubernetes clusters creation and DevOps-friendly
                experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a
                  href="https://github.com/ljcheng999/k8s-jfrog-xray"
                  alt="Click to visit Kubernetes Operator Jfrog Xray"
                  target="_blank"
                >
                  <img
                    src="/images/project2-k8s-operator-1.png"
                    alt="k8s-operator-jfrog-xray"
                  />
                </a>
              </div>
              <h2>Kubernetes Operator - Jfrog Xray</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a
                  href="https://gitlab.com/jcheng-tech-919/k8s-deploy"
                  alt="Click to visit Golang deploy script repo"
                  target="_blank"
                >
                  <img
                    src="/images/project3-golang-deploy-2.png"
                    alt="golang deployment script"
                  />
                </a>
              </div>
              <h2>Application Deployment written by Go</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
