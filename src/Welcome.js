import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, CardImg, CardBody, CardTitle, Button, Container, Row, Col } from 'reactstrap';

const candidates = [
  { id: 1, name: 'João Lourenço', img: '/img/jl.jpg', color: 'rgba(255, 0, 0, 0.2)', borderColor: 'rgba(255,99,132,1)' },
  { id: 2, name: 'Isaías Samakuva', img: '/img/is.jpg', color: 'rgba(102, 102, 102, 0.2)', borderColor: 'rgba(54, 162, 235, 1)' },
  { id: 3, name: 'Abel Chivukuvuku', img: '/img/ac.jpg', color: 'rgba(255,204, 0, 0.2)', borderColor: 'rgba(255, 206, 86, 1)' }
];

const Welcome = () => {
  const [votes, setVotes] = useState(Array(candidates.length).fill(0));
  const [chartType, setChartType] = useState('bar');

  const totalVotes = votes.reduce((acc, cur) => acc + cur, 0);

  const handleVote = (id) => {
    const updatedVotes = [...votes];
    updatedVotes[id - 1] += 1;
    setVotes(updatedVotes);
  };

  const chartData = {
    labels: candidates.map(candidate => candidate.name),
    datasets: [
      {
        label: 'Monitoring votes',
        data: votes,
        backgroundColor: candidates.map(candidate => candidate.color),
        borderColor: candidates.map(candidate => candidate.borderColor),
        borderWidth: 1
      }
    ]
  };

  return (
    <Container style={{ padding: '50px' }}>
      <Row className="text-center mb-4">
        <Col>
          <h1>Welcome to the voting page</h1>
        </Col>
      </Row>
      <Row className="align-items-center">
        {candidates.map(candidate => (
          <Col key={candidate.id} sm="4" className="mb-4">
            <Card>
              <CardImg top width="100%" src={candidate.img} alt={candidate.name} />
              <CardBody>
                <CardTitle className="text-center">{candidate.name}</CardTitle>
                <Button color="primary" size="lg" block onClick={() => handleVote(candidate.id)}>
                  <h4>Vote</h4>
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-5 mb-5" style={{ height: '650px', overflow: 'hidden' }}>
        <Col>
          <h1 className="text-center">Voting results - Total: {totalVotes} vote(s)</h1>
          <div className="text-center mb-3">
            <Button color="secondary" onClick={() => setChartType(chartType === 'bar' ? 'pie' : 'bar')}>
              Toggle to {chartType === 'bar' ? 'Pie' : 'Bar'} Chart
            </Button>
          </div>
          <div style={{ height: '100%' }}>
            {chartType === 'bar' ? (
              <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
            ) : (
              <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
            )}
          </div>
        </Col>
      </Row>
      <Row className="fixed-bottom bg-light" style={{ padding: '20px', border: '1px #ccc solid' }}>
        <Col>
          <h6 className="text-center text-muted">
            Designed by: <a href="https://www.linkedin.com/in/francisco-bizi" target="_blank">Francisco Bizi</a>
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
