// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package examples

import (
	"os"
	"path"
	"testing"

	"github.com/pulumi/pulumi/pkg/testing/integration"

	"github.com/stretchr/testify/assert"
)

var base = integration.ProgramTestOptions{
	ExpectRefreshChanges: true,
	// Note: no Config! This package should be usable without any config.
}

func TestWebserver(t *testing.T) {
	cwd, err := os.Getwd()
	if !assert.NoError(t, err) {
		t.FailNow()
	}

	opts := base.With(integration.ProgramTestOptions{
		Dependencies: []string{
			"@pulumi/linode",
		},
		Dir: path.Join(cwd, "webserver"),
	})
	integration.ProgramTest(t, &opts)
}
