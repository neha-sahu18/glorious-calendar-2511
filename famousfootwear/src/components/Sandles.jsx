import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { Link, Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../AuthContextProvider";
import React from "react";

export default function Sandles( {id,  image, Price, title, category,product} ) {
  const {data,setData} = React.useContext(AuthContext)
  const handleClick = () => {
        setData([product,...data])
  }

  return (
    <Center py={12}>
      <RouterLink to={`/women/${id}`}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"240px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,

              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={270}
              width={210}
              objectFit={"cover"}
              src={image}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"2sm"}
              textTransform={"uppercase"}
              textDecoration={""}
            >
              {Price}
            </Text>
            <Heading fontSize={"2sm"} fontFamily={"body"} fontWeight={500}>
            {title }
            </Heading>

            <Heading fontSize={"sm"} fontFamily={"body"} fontWeight={500}>
              {category}
            </Heading>
           <Link
             to="/ProductDetails"
           >
           <Button bg="black" color="white" onClick={handleClick}>Add to Cart</Button>
           </Link>
            {/* <Heading fontSize={"sm"} fontFamily={"body"} fontWeight={500}>
              {title3}
            </Heading> */}
          </Stack>
        </Box>
      </RouterLink>
    </Center>
  );
}
