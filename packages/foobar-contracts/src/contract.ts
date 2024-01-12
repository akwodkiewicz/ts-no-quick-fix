import { RpcContract } from "rpc-lib";

export class DoStuffRequest {
  id!: number;
}
export class DoStuffResponse {
  result!: string;
}

export const contract = {
  name: "ContractFoobar",
  methods: {
    doStuff: {
      request: DoStuffRequest,
      response: DoStuffResponse,
    },
  },
} as const satisfies RpcContract;
