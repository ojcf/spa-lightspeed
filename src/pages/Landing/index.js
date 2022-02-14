import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import Panel from "../../components/Panel";
import { Container, Row, Col } from "../../components/Shared";

const Landing = () => {
  const customer = useSelector((state) => state.customer);

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Panel
              title="Customer information"
              icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            >
              <p>
                Account No: <strong>{customer.accountNo}</strong>
                Name: <strong>{customer.name}</strong>
                Address: <strong>{customer.address}</strong>
                Bed Rooms: <strong>{customer.bedRooms}</strong>
                Total Rooms: <strong>{customer.totalRooms}</strong>
                SqFt: <strong>{customer.sqFt}</strong>
                Customer Type: <strong>{customer.customerType}</strong>
              </p>
            </Panel>
          </Col>
        </Row>

        <Row>
          <Col>
            <Panel
              title="Service Enabled"
              icon="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
            >
              <p>This is the Service Enabled text</p>
            </Panel>
          </Col>
          <Col>
            <Panel
              title="Wi-Fi Coverage Score(7-day)"
              icon="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            >
              <p>This is the Coverage Score text</p>
            </Panel>
          </Col>
        </Row>

        <Row>
          <Col>
            <Panel
              title="Service Enabled"
              icon="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
            >
              <p>This is the Service Enabled text</p>
            </Panel>
          </Col>
          <Col>
            <Panel
              title="Wi-Fi Coverage Score(7-day)"
              icon="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            >
              <p>This is the Coverage Score text</p>
            </Panel>
          </Col>

          <Col>
            <Panel
              title="Wi-Fi Coverage Score(7-day)"
              icon="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            >
              <p>This is the Coverage Score text</p>
            </Panel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Landing;
