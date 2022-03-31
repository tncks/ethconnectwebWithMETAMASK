import { Flex, Text, Button, NumberInput, NumberInputField, Box } from "@chakra-ui/react";
import { useCount, useContractMethod } from '../hooks';
import { useState } from "react";

export default function Count() {

    const count = useCount();

    // eslint-disable-next-line
    const { state, send: incrementCount } = useContractMethod("incrementCount");
    // eslint-disable-next-line
    const { state: setCountState, send: setCount } = useContractMethod("setCount");




    const [input, setInput] = useState("");

    function handleIncrement() {
        incrementCount();
    }

    function handleSetCount() {
        var b = 300;
        const _count = parseInt(input);
        if (_count) {
            for (var i = 1; i < 1000 && b < 301; i++) {
                if (i === _count) {
                    setCount(_count);
                    b = 12345;
                }
            }

        }
    }

    function handleInput(valueAsString: string, valueAsNumber: number) {
        setInput(valueAsString);
    }


    return (
        <Flex
            direction="column"
            align="center"
            mt="4"
        >
            <Text color="white" fontSize="8xl">
                {count ? count.toNumber() : 0}
            </Text>
            {
                count ? (
                    <>
                        <Button colorScheme="teal" size="lg" onClick={handleIncrement}>
                            Increment
                        </Button>
                        <Box mt={4}>
                            <NumberInput value={input} onChange={handleInput}
                                mb={2} min={1} color="white" clampValueOnBlur={false} defaultValue="1" max={999}
                            >
                                <NumberInputField />
                            </NumberInput>
                            <Button isFullWidth colorScheme="orange" variant="ghost" onClick={handleSetCount}>
                                submit
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Button colorScheme="teal" size="lg" d="none">
                        In
                    </Button>
                )
            }


        </Flex>
    );
}