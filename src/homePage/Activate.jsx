import {
  Container,
  Box,
  Heading,
  Text,
  HStack,
  Flex,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import Ginger from "../assets/ginger.png";
import Nootris from "../assets/nootris.png";
import Vorus from "../assets/vorus.png";
import Lemon from "../assets/Lemon.png";
import VertNootris from "../assets/nootris_vert.png";

const Activate = () => {
  return (
    <>
      <Box
        w="full"
        bgGradient="linear(291.03deg, #F25A00 20.4%, #F28000 34.38%, #F2C900 62.93%, #F2E600 76.17%)"
        opacity="0.5"
      >
        <Container maxW="8xl" p={{ base: "20px" }} position="relative">
          <Heading
            as="h1"
            fontWeight={{ base: "500", sm: "700" }}
            pt={{ sm: "96px" }}
            fontSize={{ base: "3rem", sm: "144px" }}
            color="white"
          >
            АКТИВИРУЙ ИММУНИТЕТ!
          </Heading>
          <Box
            maxW="42rem"
            color="black"
            fontWeight="400px"
            fontSize="24px"
            lineHeight="28px"
            pt="24px"
          >
            Всего пять секунд в день помогут укрепить иммунитет и повысить
            защитные силы организма
          </Box>
          <Box
            fontWeight={{ base: "500", sm: "700" }}
            color="black"
            fontSize={{ sm: "36px" }}
            lineHeight="43px"
            mt={{ sm: "120px" }}
          >
            NOOTRIS ПОМОГАЕТ
          </Box>
          <Box
            maxW="26rem"
            fontSize="18px"
            lineHeight="21px"
            fontWeight="400"
            mt="10px"
            pb={{ base: "20px", sm: "95px" }}
            color="black"
          >
            Вашему организму во время пандемии и сезонных простуд
          </Box>
        </Container>
      </Box>
      <Box>
        <Image
          zIndex="1"
          w="31rem"
          top="27rem"
          left="55rem"
          src={Ginger}
          pb={{ base: "72px" }}
          position="absolute"
          display={{ base: "none", sm: "inline" }}
        />
        <Image
          zIndex="100"
          w="33.312rem"
          top="38rem"
          left="41.5rem"
          src={Lemon}
          pb={{ base: "72px" }}
          position="absolute"
          display={{ base: "none", sm: "inline" }}
        />
        <Image
          zIndex="10"
          w="14rem"
          left="66rem"
          top="13.875rem"
          src={VertNootris}
          pb={{ base: "72px" }}
          position="absolute"
          display={{ base: "none", sm: "inline" }}
        />
      </Box>
      <Flex
        pt={{ base: "20px", sm: "112px" }}
        bg="black"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          alignSelf="center"
          color="white"
          fontWeight={{ base: "500", sm: "700" }}
          fontSize="48px"
          lineHeight="57px"
          textAlign={{ base: "center" }}
        >
          ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА{" "}
        </Box>

        <Box
          color="#FCB500"
          textAlign={{ base: "center" }}
          fontWeight={{ base: "500", sm: "700" }}
          fontSize="48px"
          lineHeight="57px"
        >
          СО СКИДКОЙ -15% ПЕРВЫМ!
        </Box>
        <HStack spacing="2rem" mt="85px">
          <Text as="s" color="#ADADAD" fontSize="36px" fontWeight="400">
            750
          </Text>
          <Text color="white" fontSize="48px" fontWeight="400">
            690
          </Text>
        </HStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "3rem", sm: "8rem" }}
          mt="59px"
          display={{ base: "flex" }}
          alignItems={{ base: "center" }}
        >
          <Box maxW="193px">
            <Image src={Ginger} pb={{ sm: "72px" }} />
            <Text color="white" textAlign="center" fontSize="18px">
              Содержит
            </Text>
            <Text color="#FCB500" textAlign="center" fontSize="18px">
              имбирь
            </Text>
          </Box>
          <Box maxW="480px" maxH="480px">
            <Image objectFit="cover" src={Nootris} pb={{ sm: "45px" }} />
            <Text color="white" textAlign="center" fontSize="36px">
              + Бесплатная доставка
            </Text>
            <Text color="#FCB500" textAlign="center" fontSize="24px">
              Специальная цена
            </Text>
          </Box>
          <Box maxW="193px">
            <Image src={Vorus} pb={{ sm: "78px" }} />
            <Text color="white" textAlign="center" fontSize="18px">
              Нейтрализует
            </Text>
            <Text color="#FCB500" textAlign="center" fontSize="18px">
              вирусы
            </Text>
          </Box>
        </Stack>
        <Button
          color="black"
          fontSize="18px"
          bg="#FCB500"
          w="16rem"
          mt="64px"
          mb="112px"
        >
          {" "}
          Оформить заказ
        </Button>
      </Flex>
    </>
  );
};
export default Activate;
