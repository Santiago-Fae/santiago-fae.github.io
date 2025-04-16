import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { getProjectDetailsData } from '../../data/projects';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import '../../styles/project-details.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  
  // Get project data from the unified data source
  const projectsData = getProjectDetailsData();

  useEffect(() => {
    // Find the project based on URL ID
    const foundProject = projectsData.find(p => p.id === projectId);
    setProject(foundProject);
    
    // Format images and videos for ImageGallery component
    if (foundProject && foundProject.images && foundProject.images.length > 0) {
      const formattedMedia = foundProject.images.map(imagePath => {
        const isVideo = imagePath.toLowerCase().endsWith('.mp4');

        if (isVideo) {
          return {
            thumbnail: "/img/video-thumbnail-default.png",
            renderItem: () => (
              <div className="video-wrapper" style={{ textAlign: "center" }}>
                <video controls style={{ maxWidth: '100%', maxHeight: '500px' }}>
                  <source src={imagePath} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            ),
            thumbnailAlt: foundProject.cardTitle, // put image of video
          };
        }

        return {
          original: imagePath,
          thumbnail: imagePath,
          originalAlt: foundProject.cardTitle,
          thumbnailAlt: foundProject.cardTitle,
        };
      });

      setGalleryImages(formattedMedia);
    }

  }, [projectId, projectsData]);

  if (!project) {
    return (
      <section className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-12 text-center">
            <h2 style={{ color: "#ffffff", marginTop: "50px" }}>Project Not Found</h2>
            <p style={{ color: "#ffffff", marginBottom: "30px" }}>
            Sorry, the project you are looking for does not exist or has been removed.
            </p>
            <Link 
            to="/#projects" 
            className="btn btn-primary" 
            style={{
              color: "#ffffff",
              backgroundColor: "#007bff",
              borderColor: "#007bff",
              padding: "10px 20px",
              fontSize: "16px",
              textDecoration: "none",
              borderRadius: "5px"
            }}
            >
            Return to Homepage
            </Link>
          </div>
        </div>
      </div>
      </section>
    );
  }

  return (
    <section className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title pb-3">
          <h2 style={{ color: "#ffffff" }}>{project.cardTitle}</h2>
          <h3 style={{ color: "#ffffff" }}>{project.cardSubtitle}</h3>
        </div>
        
        <div className="row">
          <div className="col-lg-12">
            <div className="project-technologies mb-5 text-center">
              {project.technologies.map((tech, i) => (
                <Chip key={i} label={tech} style={{ margin: '5px' }}></Chip>
              ))}
            </div>

            <div className="project-description mb-4 d-flex justify-content-center">
              <div className='col-lg-8'>
                <h3 style={{ color: "#ffffff", textAlign: 'center' }} className='mb-2'>Description</h3>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                  style={{ color: "#ffffff" }}
                />
              </div>
            </div>
            
            {galleryImages.length > 0 && (
              <div className="project-images mb-4">
                <h3 style={{ color: "#ffffff", textAlign: 'center' }}>Images</h3>
                <div className="image-gallery-wrapper">
                  <ImageGallery 
                    items={galleryImages} 
                    showPlayButton={false}
                    showFullscreenButton={true}
                    showNav={true}
                    showThumbnails={true}
                    thumbnailPosition="bottom"
                    slideInterval={3000}
                    slideOnThumbnailOver={false}
                    lazyLoad={true}
                  />
                </div>
              </div>
            )}
            
            {project.links && project.links.length > 0 && (
              <div className="project-links justify-content-center mb-4">
                <div className="d-flex flex-wrap justify-center">
                  {project.links.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary m-2"
                      style={{ color: "#ffffff" }}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-4 mb-5 text-center">
              <a href="/#projects" a style={{ color: "#ffffff" }} className="btn btn-secondary">
                  <span>Back to all projects</span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;