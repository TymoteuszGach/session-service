import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { SessionServiceStack, SessionServiceStackProps } from "./session-service-stack";

export interface PipelineAppStageProps extends cdk.StackProps {
  sessionServiceStackProps?: SessionServiceStackProps;
}

export class PipelineAppStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props: PipelineAppStageProps) {
    super(scope, id, props);

    new SessionServiceStack(this, "SessionService", props.sessionServiceStackProps);
  }
}
