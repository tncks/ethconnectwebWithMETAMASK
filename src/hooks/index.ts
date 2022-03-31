import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";
import { simpleContractABI, simpleContractAddress } from "../ethConfig";


const simpleContractInterface = new ethers.utils.Interface(simpleContractABI);
const contract = new Contract(simpleContractAddress, simpleContractInterface);

export function useCount() {
    const [count]: any =
        useContractCall({
            abi: simpleContractInterface,
            address: simpleContractAddress,
            method: "count",
            args: [],
        }) ?? [];

    return count;
}
/*
export function useIncrement() {
    const { state, send } = useContractFunction(contract, "incrementCount", {});
    return { state, send };
}

export function useSetCount() {
    const { state, send } = useContractFunction(contract, "setCount", {});
    return { state, send };
}
*/
export function useContractMethod(methodName: string) {
    const { state, send } = useContractFunction(contract, methodName, {});
    return { state, send };
}