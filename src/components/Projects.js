import React, { Component} from 'react';
import ProjectTile from './ProjectTile';
import { Container } from 'react-bootstrap';

class Projects extends Component {
    constructor(props){
        super(props);

        this.state={
            projectList:[{'name':'ian', 'id':'2'},{'name':'michelle', 'id':'1'}],
            message: null
        }
    }

    componentDidMount(){
        this.getGithubRepos();
    }

getGithubRepos(){
    let newData = fetch("https://api.github.com/users/iharris06/repos")
  .then(response => response.json())
  .then(data => this.setState({
      projectList:data,
      message: 'success'
    }))
  .catch(err =>{this.setState({message:err})});
}


    render(){
        return(
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Projects</h1>
                        <div className="row">
                            {this.state.projectList.map(project => {
                                return (
                                    <ProjectTile 
                                        name={project.name}
                                        description={project.description}
                                        url={project.html_url}
                                        key={project.id}
                                    />
                                )
                            })
                            }
                        </div>
                        
                    </div>
                </div>
            </Container>
            /* TODO
            Add projects components to this page.
            - click on tiles to launch modal to be able to read more details and view demo.
            - demo video of app
            */
        )
    }
}

export default Projects;