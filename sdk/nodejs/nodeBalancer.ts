// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NodeBalancer extends pulumi.CustomResource {
    /**
     * Get an existing NodeBalancer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NodeBalancerState, opts?: pulumi.CustomResourceOptions): NodeBalancer {
        return new NodeBalancer(name, <any>state, { ...opts, id: id });
    }

    /**
     * Throttle connections per second (0-20). Set to 0 (zero) to disable throttling.
     */
    public readonly clientConnThrottle: pulumi.Output<number | undefined>;
    public /*out*/ readonly created: pulumi.Output<string>;
    /**
     * This NodeBalancer's hostname, ending with .nodebalancer.linode.com
     */
    public /*out*/ readonly hostname: pulumi.Output<string>;
    /**
     * The Public IPv4 Address of this NodeBalancer
     */
    public /*out*/ readonly ipv4: pulumi.Output<string>;
    /**
     * The Public IPv6 Address of this NodeBalancer
     */
    public /*out*/ readonly ipv6: pulumi.Output<string>;
    /**
     * The label of the Linode NodeBalancer.
     */
    public readonly label: pulumi.Output<string | undefined>;
    /**
     * The region where this NodeBalancer will be deployed.
     */
    public readonly region: pulumi.Output<string>;
    /**
     * An array of tags applied to this object. Tags are for organizational purposes only.
     */
    public readonly tags: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly transfer: pulumi.Output<{ in: number, out: number, total: number }>;
    public /*out*/ readonly updated: pulumi.Output<string>;

    /**
     * Create a NodeBalancer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NodeBalancerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NodeBalancerArgs | NodeBalancerState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: NodeBalancerState = argsOrState as NodeBalancerState | undefined;
            inputs["clientConnThrottle"] = state ? state.clientConnThrottle : undefined;
            inputs["created"] = state ? state.created : undefined;
            inputs["hostname"] = state ? state.hostname : undefined;
            inputs["ipv4"] = state ? state.ipv4 : undefined;
            inputs["ipv6"] = state ? state.ipv6 : undefined;
            inputs["label"] = state ? state.label : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["transfer"] = state ? state.transfer : undefined;
            inputs["updated"] = state ? state.updated : undefined;
        } else {
            const args = argsOrState as NodeBalancerArgs | undefined;
            if (!args || args.region === undefined) {
                throw new Error("Missing required property 'region'");
            }
            inputs["clientConnThrottle"] = args ? args.clientConnThrottle : undefined;
            inputs["label"] = args ? args.label : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["created"] = undefined /*out*/;
            inputs["hostname"] = undefined /*out*/;
            inputs["ipv4"] = undefined /*out*/;
            inputs["ipv6"] = undefined /*out*/;
            inputs["transfer"] = undefined /*out*/;
            inputs["updated"] = undefined /*out*/;
        }
        super("linode:index/nodeBalancer:NodeBalancer", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NodeBalancer resources.
 */
export interface NodeBalancerState {
    /**
     * Throttle connections per second (0-20). Set to 0 (zero) to disable throttling.
     */
    readonly clientConnThrottle?: pulumi.Input<number>;
    readonly created?: pulumi.Input<string>;
    /**
     * This NodeBalancer's hostname, ending with .nodebalancer.linode.com
     */
    readonly hostname?: pulumi.Input<string>;
    /**
     * The Public IPv4 Address of this NodeBalancer
     */
    readonly ipv4?: pulumi.Input<string>;
    /**
     * The Public IPv6 Address of this NodeBalancer
     */
    readonly ipv6?: pulumi.Input<string>;
    /**
     * The label of the Linode NodeBalancer.
     */
    readonly label?: pulumi.Input<string>;
    /**
     * The region where this NodeBalancer will be deployed.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * An array of tags applied to this object. Tags are for organizational purposes only.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    readonly transfer?: pulumi.Input<{ in?: pulumi.Input<number>, out?: pulumi.Input<number>, total?: pulumi.Input<number> }>;
    readonly updated?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NodeBalancer resource.
 */
export interface NodeBalancerArgs {
    /**
     * Throttle connections per second (0-20). Set to 0 (zero) to disable throttling.
     */
    readonly clientConnThrottle?: pulumi.Input<number>;
    /**
     * The label of the Linode NodeBalancer.
     */
    readonly label?: pulumi.Input<string>;
    /**
     * The region where this NodeBalancer will be deployed.
     */
    readonly region: pulumi.Input<string>;
    /**
     * An array of tags applied to this object. Tags are for organizational purposes only.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
}
