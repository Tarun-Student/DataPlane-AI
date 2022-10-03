import ec2 = require('aws-cdk-lib/aws-ec2');
import ecs = require('aws-cdk-lib/aws-ecs');
import ecs_patterns = require('aws-cdk-lib/aws-ecs-patterns');
import cdk = require('aws-cdk-lib');
import path = require('path');

// Instantiate Fargate Service with a cluster and a local image that gets
// uploaded to an S3 staging bucket prior to being uploaded to ECR.

