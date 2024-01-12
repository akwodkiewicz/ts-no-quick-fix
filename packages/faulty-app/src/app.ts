import { contract } from "foobar-contracts";
import { RpcService } from "rpc-lib";

class Server implements RpcService<typeof contract> {}
