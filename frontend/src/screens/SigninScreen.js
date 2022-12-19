import Button from 'react-bootstrap/esm/Button';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 classname="my-3">Sign </h1>
      <Form>
        <FormGroup className="mb-3" conrolId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </FormGroup>
        <FormGroup className="mb-3" conrolId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </FormGroup>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New Customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}
