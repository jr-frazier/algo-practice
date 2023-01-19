package bs

import "testing"

func TestPrintSteps(t *testing.T) {
	tests := []struct {
		num      int
		expected int
	}{
		{128, 7},
		{256, 8},
	}

	for _, e := range tests {
		result := PrintSteps(e.num)

		if e.expected != result {
			t.Errorf("got %d expected %d", result, e.expected)
		}
	}
}
