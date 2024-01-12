type Class = new (...args: any[]) => any;

export type RpcContractMethod<Request, Response> = {
  request: Request;
  response: Response;
};

export interface RpcContract {
  name: string;
  methods: Record<string, RpcContractMethod<Class, Class>>;
}

export type RpcService<ContractT extends RpcContract> = {
  [key in keyof ContractT["methods"]]: ContractT["methods"][key] extends RpcContractMethod<
    infer Req extends Class,
    infer Res extends Class
  >
    ? (body: InstanceType<Req>) => Promise<InstanceType<Res>>
    : never;
};
