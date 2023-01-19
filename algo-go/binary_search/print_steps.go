package bs

func PrintSteps(num int) int {
	x := num
	steps := 0

	for x != 1 {
		x = 1 + (x-1)/2
		steps++
	}

	return steps
}
