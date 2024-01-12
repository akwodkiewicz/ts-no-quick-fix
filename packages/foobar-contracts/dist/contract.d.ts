export declare class DoStuffRequest {
    id: number;
}
export declare class DoStuffResponse {
    result: string;
}
export declare const contract: {
    readonly name: "ContractFoobar";
    readonly methods: {
        readonly doStuff: {
            readonly request: typeof DoStuffRequest;
            readonly response: typeof DoStuffResponse;
        };
    };
};
