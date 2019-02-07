// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NodeBalancerNode extends pulumi.CustomResource {
    /**
     * Get an existing NodeBalancerNode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NodeBalancerNodeState, opts?: pulumi.CustomResourceOptions): NodeBalancerNode {
        return new NodeBalancerNode(name, <any>state, { ...opts, id: id });
    }

    /**
     * The private IP Address and port (IP:PORT) where this backend can be reached. This must be a private IP address.
     */
    public readonly address: pulumi.Output<string>;
    /**
     * The ID of the NodeBalancerConfig to access.
     */
    public readonly configId: pulumi.Output<number>;
    /**
     * The label for this node. This is for display purposes only.
     */
    public readonly label: pulumi.Output<string>;
    /**
     * The mode this NodeBalancer should use when sending traffic to this backend. If set to `accept` this backend is
     * accepting traffic. If set to `reject` this backend will not receive traffic. If set to `drain` this backend will not
     * receive new traffic, but connections already pinned to it will continue to be routed to it.
     */
    public readonly mode: pulumi.Output<string>;
    /**
     * The ID of the NodeBalancer to access.
     */
    public readonly nodebalancerId: pulumi.Output<number>;
    /**
     * The current status of this node, based on the configured checks of its NodeBalancer Config. (unknown, UP, DOWN)
     */
    public /*out*/ readonly status: pulumi.Output<string>;
    /**
     * Used when picking a backend to serve a request and is not pinned to a single backend yet. Nodes with a higher weight
     * will receive more traffic. (1-255)
     */
    public readonly weight: pulumi.Output<number>;

    /**
     * Create a NodeBalancerNode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NodeBalancerNodeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NodeBalancerNodeArgs | NodeBalancerNodeState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: NodeBalancerNodeState = argsOrState as NodeBalancerNodeState | undefined;
            inputs["address"] = state ? state.address : undefined;
            inputs["configId"] = state ? state.configId : undefined;
            inputs["label"] = state ? state.label : undefined;
            inputs["mode"] = state ? state.mode : undefined;
            inputs["nodebalancerId"] = state ? state.nodebalancerId : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["weight"] = state ? state.weight : undefined;
        } else {
            const args = argsOrState as NodeBalancerNodeArgs | undefined;
            if (!args || args.address === undefined) {
                throw new Error("Missing required property 'address'");
            }
            if (!args || args.configId === undefined) {
                throw new Error("Missing required property 'configId'");
            }
            if (!args || args.label === undefined) {
                throw new Error("Missing required property 'label'");
            }
            if (!args || args.nodebalancerId === undefined) {
                throw new Error("Missing required property 'nodebalancerId'");
            }
            inputs["address"] = args ? args.address : undefined;
            inputs["configId"] = args ? args.configId : undefined;
            inputs["label"] = args ? args.label : undefined;
            inputs["mode"] = args ? args.mode : undefined;
            inputs["nodebalancerId"] = args ? args.nodebalancerId : undefined;
            inputs["weight"] = args ? args.weight : undefined;
            inputs["status"] = undefined /*out*/;
        }
        super("linode:index/nodeBalancerNode:NodeBalancerNode", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NodeBalancerNode resources.
 */
export interface NodeBalancerNodeState {
    /**
     * The private IP Address and port (IP:PORT) where this backend can be reached. This must be a private IP address.
     */
    readonly address?: pulumi.Input<string>;
    /**
     * The ID of the NodeBalancerConfig to access.
     */
    readonly configId?: pulumi.Input<number>;
    /**
     * The label for this node. This is for display purposes only.
     */
    readonly label?: pulumi.Input<string>;
    /**
     * The mode this NodeBalancer should use when sending traffic to this backend. If set to `accept` this backend is
     * accepting traffic. If set to `reject` this backend will not receive traffic. If set to `drain` this backend will not
     * receive new traffic, but connections already pinned to it will continue to be routed to it.
     */
    readonly mode?: pulumi.Input<string>;
    /**
     * The ID of the NodeBalancer to access.
     */
    readonly nodebalancerId?: pulumi.Input<number>;
    /**
     * The current status of this node, based on the configured checks of its NodeBalancer Config. (unknown, UP, DOWN)
     */
    readonly status?: pulumi.Input<string>;
    /**
     * Used when picking a backend to serve a request and is not pinned to a single backend yet. Nodes with a higher weight
     * will receive more traffic. (1-255)
     */
    readonly weight?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a NodeBalancerNode resource.
 */
export interface NodeBalancerNodeArgs {
    /**
     * The private IP Address and port (IP:PORT) where this backend can be reached. This must be a private IP address.
     */
    readonly address: pulumi.Input<string>;
    /**
     * The ID of the NodeBalancerConfig to access.
     */
    readonly configId: pulumi.Input<number>;
    /**
     * The label for this node. This is for display purposes only.
     */
    readonly label: pulumi.Input<string>;
    /**
     * The mode this NodeBalancer should use when sending traffic to this backend. If set to `accept` this backend is
     * accepting traffic. If set to `reject` this backend will not receive traffic. If set to `drain` this backend will not
     * receive new traffic, but connections already pinned to it will continue to be routed to it.
     */
    readonly mode?: pulumi.Input<string>;
    /**
     * The ID of the NodeBalancer to access.
     */
    readonly nodebalancerId: pulumi.Input<number>;
    /**
     * Used when picking a backend to serve a request and is not pinned to a single backend yet. Nodes with a higher weight
     * will receive more traffic. (1-255)
     */
    readonly weight?: pulumi.Input<number>;
}
