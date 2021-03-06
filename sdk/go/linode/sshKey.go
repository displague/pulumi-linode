// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package linode

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Linode SSH Key resource.  This can be used to create, modify, and delete Linodes SSH Keys.  Managed SSH Keys allow instances to be created with a list of Linode usernames, whose SSH keys will be automatically applied to the root account's `~/.ssh/authorized_keys` file.
// For more information, see the [Linode APIv4 docs](https://developers.linode.com/api/v4#operation/getSSHKeys).
// 
// ## Attributes
// 
// This resource exports the following attributes:
// 
// * `created` - The date this SSH Key was created.
type SshKey struct {
	s *pulumi.ResourceState
}

// NewSshKey registers a new resource with the given unique name, arguments, and options.
func NewSshKey(ctx *pulumi.Context,
	name string, args *SshKeyArgs, opts ...pulumi.ResourceOpt) (*SshKey, error) {
	if args == nil || args.Label == nil {
		return nil, errors.New("missing required argument 'Label'")
	}
	if args == nil || args.SshKey == nil {
		return nil, errors.New("missing required argument 'SshKey'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["label"] = nil
		inputs["sshKey"] = nil
	} else {
		inputs["label"] = args.Label
		inputs["sshKey"] = args.SshKey
	}
	inputs["created"] = nil
	s, err := ctx.RegisterResource("linode:index/sshKey:SshKey", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SshKey{s: s}, nil
}

// GetSshKey gets an existing SshKey resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSshKey(ctx *pulumi.Context,
	name string, id pulumi.ID, state *SshKeyState, opts ...pulumi.ResourceOpt) (*SshKey, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["created"] = state.Created
		inputs["label"] = state.Label
		inputs["sshKey"] = state.SshKey
	}
	s, err := ctx.ReadResource("linode:index/sshKey:SshKey", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SshKey{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *SshKey) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *SshKey) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The date this key was added.
func (r *SshKey) Created() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["created"])
}

// A label for the SSH Key.
func (r *SshKey) Label() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["label"])
}

// The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.
func (r *SshKey) SshKey() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sshKey"])
}

// Input properties used for looking up and filtering SshKey resources.
type SshKeyState struct {
	// The date this key was added.
	Created interface{}
	// A label for the SSH Key.
	Label interface{}
	// The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.
	SshKey interface{}
}

// The set of arguments for constructing a SshKey resource.
type SshKeyArgs struct {
	// A label for the SSH Key.
	Label interface{}
	// The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.
	SshKey interface{}
}
