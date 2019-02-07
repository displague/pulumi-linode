# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class Token(pulumi.CustomResource):
    created: pulumi.Output[str]
    expiry: pulumi.Output[str]
    """
    When this token will expire. Personal Access Tokens cannot be renewed, so after this time the token will be completely unusable and a new token will need to be generated. Tokens may be created with 'null' as their expiry and will never expire unless revoked.
    """
    label: pulumi.Output[str]
    """
    A label for the Token.
    """
    scopes: pulumi.Output[str]
    """
    The scopes this token was created with. These define what parts of the Account the token can be used to access. Many command-line tools, such as the Linode CLI, require tokens with access to *. Tokens with more restrictive scopes are generally more secure.
    """
    token: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, expiry=None, label=None, scopes=None, __name__=None, __opts__=None):
        """
        Provides a Linode Token resource.  This can be used to create, modify, and delete Linode API Personal Access Tokens.  Personal Access Tokens proxy user credentials for Linode API access.  This is necessary for tools, such as Terraform, to interact with Linode services on a user's behalf.
        
        It is common for Terraform itself to be configured with broadly scoped Personal Access Tokens.  Provisioning scripts or tools configured within a Linode Instance should follow the principle of least privilege to afford only the required roles for tools to perform their necessary tasks.  The `linode_token` resource allows for the management of Personal Access Tokens with scopes mirroring or narrowing the scope of the parent token.
        
        For more information, see the [Linode APIv4 docs](https://developers.linode.com/api/v4#operation/getTokens).
        
        ## Attributes
        
        This resource exports the following attributes:
        
        * `token` - The token used to access the API.
        
        * `created` - The date this Token was created.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] expiry: When this token will expire. Personal Access Tokens cannot be renewed, so after this time the token will be completely unusable and a new token will need to be generated. Tokens may be created with 'null' as their expiry and will never expire unless revoked.
        :param pulumi.Input[str] label: A label for the Token.
        :param pulumi.Input[str] scopes: The scopes this token was created with. These define what parts of the Account the token can be used to access. Many command-line tools, such as the Linode CLI, require tokens with access to *. Tokens with more restrictive scopes are generally more secure.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['expiry'] = expiry

        __props__['label'] = label

        if scopes is None:
            raise TypeError('Missing required property scopes')
        __props__['scopes'] = scopes

        __props__['created'] = None
        __props__['token'] = None

        super(Token, __self__).__init__(
            'linode:index/token:Token',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

