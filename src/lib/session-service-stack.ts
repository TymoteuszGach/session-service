import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface SessionServiceStackProps extends cdk.StackProps {}

export class SessionServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: SessionServiceStackProps) {
    super(scope, id, props);
  }
}
