View Software Revision Number

Command: VR

Function: Displays the software revision number including the release and build numbers.

Authorization: None required.

Inputs: None

Outputs: The software revision number.

Errors: None

The software revision reported by the VR command will be in one of the following forms:
- `xxxx-19xx` – Indicates the software is PCI HSM certified and the appropriate security settings (e.g., via the CS console command) are set to the required values.
- `xxxx-09xx` – Indicates either the software version is not PCI HSM certified, or it is certified but one or more of the required security settings have not been set correctly (again using the CS console command).

From version 3.0 and above, all RSA operations are automatically accelerated, so the optional RSA Booster license (HSM9-LIC033) is no longer used and does not appear in the VR command output.

Example:

![image](https://user-images.githubusercontent.com/77227227/196627451-81320ad5-7013-4af8-8727-6364cc258952.png)
