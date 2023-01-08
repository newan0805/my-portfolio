import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, desciption, image,  link }) => {

  return (
    <Col size={12} sm={6} md={4}>

      <div className="proj-imgbx">
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0" > 
        <img alt="Rainbow Rocket Man in SVG" width="732" height="558" data-id="2148351"
          data-animated-url="https://cdn.dribbble.com/users/891352/screenshots/2148351/media/77bb6bb656a750b5a35410aaaf1ad522.gif"
          skip_resize="true"
          srcset="https://cdn.dribbble.com/users/891352/screenshots/2148351/media/77bb6bb656a750b5a35410aaaf1ad522.gif 320w, 
          https://cdn.dribbble.com/users/891352/screenshots/2148351/media/77bb6bb656a750b5a35410aaaf1ad522.gif 400w, 
                  https://cdn.dribbble.com/users/891352/screenshots/2148351/media/77bb6bb656a750b5a35410aaaf1ad522.gif 450w, 
                  https://cdn.dribbble.com/users/891352/screenshots/2148351/media/77bb6bb656a750b5a35410aaaf1ad522.gif 640w, 
                  https://cdn.dribbble.com/users/891352/screenshots/2148351/media/77bb6bb656a750b5a35410aaaf1ad522.gif 700w, 
                  https://cdn.dribbble.com/users/891352/screenshots/2148351/media/77bb6bb656a750b5a35410aaaf1ad522.gif 800w, 
                  https://cdn.dribbble.com/users/891352/screenshots/2148351/media/77bb6bb656a750b5a35410aaaf1ad522.gif 768w"
                  sizes="(max-width: 919px) 100vw, max(768px, 98vh)"
          src="https://cdn.dribbble.com/users/891352/screenshots/2148351/media/77bb6bb656a750b5a35410aaaf1ad522.gif" />
        {/* <img src={image} /> */}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span><p>{desciption}</p></span>
          <span><a href={"https://github.com"+link}><Button className="vvd">View</Button></a></span>
        </div>
      </div>
                  </div>
    </Col>
  )
}
