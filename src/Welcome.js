import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';

const votes = [0, 0, 0, 0];
var totalVotes = getSumm(votes);

function getSumm(votes){

	return votes.reduce(
	  ( acc, cur ) => acc + cur,
	  0
	);
}

class Welcome extends Component {

	constructor(props){

	  	 super(props);

	  	 this.state = {

	  	 	points : 5,
	  	 	total : totalVotes,
	  	 	bar : {

				labels: ["João Lourenço", "Isaías Samakuva", "Abel Chivukuvuku"],
		        datasets: [{
		            label: 'Monitoring votes',
		            data: votes,
		            backgroundColor: [
		                'rgba(255, 0, 0, 0.2)',
		                'rgba(102, 102, 102, 0.2)',
		                'rgba(255,204, 0, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ]
		        }]

			}
	  	 }

	  	 this.makeYourVote = this.makeYourVote.bind(this);
	}

	makeYourVote(id){

		switch(id)
		{
			case 1 :

				let i = votes[1] + this.state.points;
				votes[1] = i;
				let ti = getSumm(votes);
				this.setState({data : votes, total : ti});

				break;
			case 6 :

				let a = votes[2] + this.state.points;
				votes[2] = a;
				let ta = getSumm(votes);
				this.setState({data : votes, total : ta});

				break;
			case 4 :

				let j = votes[0] + this.state.points;
				votes[0] = j;
				let tj = getSumm(votes);
				this.setState({data : votes, total : tj});

				break;
				default:
		}

	}

	render() {
	    return (
		    <div>
		      <div className="container" style={{padding:'100px'}}>

		      	<div className="row">
		      		<div className="col-sm-6 offset-3">
						<h1 className="text-center">Welcome to the voting page</h1>
						<h3 className="text-center">Click on the button's vote under the picture of your candidate to make the vote.</h3>
		      		</div>
		      	</div>
		      	<div className="row" style={{padding:'50px'}}>
		      		<div className="col-sm-8 offset-2">
						<div className="row">
				      		<div className="col-sm-4">
								<Card>
							        <CardImg top width="100%" src="/img/jl.jpg" alt="Card image cap" />
							        <CardBody>
							          <CardTitle className="text-center">João Lourenço</CardTitle>
							          <Button color="danger" size="lg" block onClick={this.makeYourVote.bind(this, 4)}><h4>Vote</h4></Button>
							        </CardBody>
							     </Card>
				      		</div>
				      		<div className="col-sm-4">
								<Card>
							        <CardImg top width="100%" src="/img/is.jpg" alt="Card image cap" />
							        <CardBody>
							          <CardTitle className="text-center">Isaías Samakuva</CardTitle>
							          <Button color="secondary" size="lg" block onClick={this.makeYourVote.bind(this, 1)}><h4>Vote</h4></Button>
							        </CardBody>
							     </Card>
				      		</div>
				      		<div className="col-sm-4">
								<Card>
							        <CardImg top width="100%" src="/img/ac.jpg" alt="Card image cap" />
							        <CardBody>
							          <CardTitle className="text-center">Abel Chivukuvuku</CardTitle>
							          <Button color="warning" size="lg" block onClick={this.makeYourVote.bind(this, 6)}><h4>Vote</h4></Button>
							        </CardBody>
							     </Card>
				      		</div>
				      	</div>
		      		</div>
		      	</div>
		      	<hr/>
		      	<div className="row" style={{padding:'50px'}}>
		      		<div className="col-sm-8 offset-2">
		      			<h1 className="text-center">Voting results - Total : {this.state.total} vote(s)</h1>
		      			<Bar

							data={this.state.bar}
							options={{}}
						/>
		      		</div>
		      	</div>
		    </div>
		    <div className="row fixed-bottom bg-light" style={{padding:'20px', border:'1px #ccc solid'}}>
		      		<div className="col-sm-8 offset-2">
		      			<h6 className="text-center text-muted">Designed by: <a href="https://www.linkedin.com/in/francisco-bizi-a01ba763" 
		      			target="_blank" >Francisco Bizi</a>
						</h6>
		      		</div>
		    </div>
		</div>      
	    );
	}
}

export default Welcome;
