import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {
  name: string;
  magicLinkUrl: string;
}

export function MagicLinkEmail({ name, magicLinkUrl }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Sign in to your Notes App account</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] mx-auto my-0 p-[24px] max-w-[600px]">
            <Section>
              <Img
                src={`${process.env.BETTER_AUTH_URL}/images/logo.png`}
                alt="Notes App"
                className="w-44 h-auto mx-auto"
              />
              <Hr className="border border-solid border-[#EAEAEA] my-[16px] mx-0" />
              <Text className="text-[16px] leading-[24px] text-[#333333]">Hello {name},</Text>
              <Text className="text-[16px] leading-[24px] text-[#333333]">
                Use the button below to securely sign in to your Notes App account. This link will expire in 10 minutes.
              </Text>
              <Section className="text-center my-[32px]">
                <Button
                  className="bg-[#FFD700] rounded-[8px] text-black font-bold no-underline text-center px-[24px] py-[12px] box-border"
                  href={magicLinkUrl}
                >
                  Sign in to Notes App
                </Button>
              </Section>
              <Text className="text-[14px] leading-[24px] text-[#666666]">
                If you didn&apos;t request this link, you can safely ignore this email.
              </Text>
            </Section>
            <Hr className="border border-solid border-[#EAEAEA] my-[24px] mx-0" />
            <Section>
              <Row>
                <Column>
                  <Text className="text-[12px] text-[#666666] m-0">© 2025 Notes App. All rights reserved.</Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
