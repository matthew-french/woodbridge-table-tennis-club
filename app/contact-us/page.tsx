'use client';

import { Container, Title, Text, List, Group, Button } from '@mantine/core';

export default function ContactUs() {
  return (
    <div>
      <Container>
      <Title order={1}>Contact Us</Title>
      <Title order={2}>Woodbridge Table Tennis Club</Title>
      <Text size="lg">
        Woodbridge Table Tennis Club is a friendly club that welcomes players of all levels.
      </Text>

      <Title order={3}>Location</Title>
      <Text>
        The club is located at Woodbridge, Suffolk. For directions, you can visit our location on Google Maps.
      </Text>

      <Title order={3}>Facilities</Title>
      <List>
        <List.Item>Clone or download repository from GitHub</List.Item>
        <List.Item>Install dependencies with yarn</List.Item>
        <List.Item>To start development server run npm start command</List.Item>
        <List.Item>Run tests to make sure your changes do not break the build</List.Item>
        <List.Item>Submit a pull request once you are done</List.Item>
      </List>
      {/* <List>
        <List.Item>Four tables available for play</List.Item>
        <List.Item>Changing rooms and shower facilities</List.Item>
        <List.Item>Coaching available for beginners</List.Item>
      </List> */}

      <Title order={3}>Membership</Title>
      <Text>
        Membership is open to everyone. For more details, please contact us or visit our website.
      </Text>

      <Title order={3}>Contact Us</Title>
      <Text>Email: contact@woodbridgettc.com</Text>
      <Text>Phone: 01234 567890</Text>

      <Group mt="xl">
        <Button component="a" href="https://www.tabletennisengland.co.uk/ping-tables/woodbridge-table-tennis-club/" target="_blank">
          Visit Table Tennis England
        </Button>
      </Group>
    </Container>
    </div>
  );
}