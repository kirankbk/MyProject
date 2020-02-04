namespace System.Reflection {
	export const enum CallingConventions {
		Standard = 1,
		VarArgs = 2,
		Any = 3,
		HasThis = 32,
		ExplicitThis = 64
	}
	export const enum EventAttributes {
		None = 0,
		SpecialName = 512,
		ReservedMask = 1024,
		RTSpecialName = 1024
	}
	export const enum FieldAttributes {
		FieldAccessMask = 7,
		PrivateScope = 0,
		Private = 1,
		FamANDAssem = 2,
		Assembly = 3,
		Family = 4,
		FamORAssem = 5,
		Public = 6,
		Static = 16,
		InitOnly = 32,
		Literal = 64,
		NotSerialized = 128,
		SpecialName = 512,
		PinvokeImpl = 8192,
		ReservedMask = 38144,
		RTSpecialName = 1024,
		HasFieldMarshal = 4096,
		HasDefault = 32768,
		HasFieldRVA = 256
	}
	export const enum GenericParameterAttributes {
		None = 0,
		VarianceMask = 3,
		Covariant = 1,
		Contravariant = 2,
		SpecialConstraintMask = 28,
		ReferenceTypeConstraint = 4,
		NotNullableValueTypeConstraint = 8,
		DefaultConstructorConstraint = 16
	}
	export const enum MemberTypes {
		Constructor = 1,
		Event = 2,
		Field = 4,
		Method = 8,
		Property = 16,
		TypeInfo = 32,
		Custom = 64,
		NestedType = 128,
		All = 191
	}
	export const enum MethodAttributes {
		MemberAccessMask = 7,
		PrivateScope = 0,
		Private = 1,
		FamANDAssem = 2,
		Assembly = 3,
		Family = 4,
		FamORAssem = 5,
		Public = 6,
		Static = 16,
		Final = 32,
		Virtual = 64,
		HideBySig = 128,
		CheckAccessOnOverride = 512,
		VtableLayoutMask = 256,
		ReuseSlot = 0,
		NewSlot = 256,
		Abstract = 1024,
		SpecialName = 2048,
		PinvokeImpl = 8192,
		UnmanagedExport = 8,
		RTSpecialName = 4096,
		ReservedMask = 53248,
		HasSecurity = 16384,
		RequireSecObject = 32768
	}
	export const enum MethodImplAttributes {
		CodeTypeMask = 3,
		IL = 0,
		Native = 1,
		OPTIL = 2,
		Runtime = 3,
		ManagedMask = 4,
		Unmanaged = 4,
		Managed = 0,
		ForwardRef = 16,
		PreserveSig = 128,
		InternalCall = 4096,
		Synchronized = 32,
		NoInlining = 8,
		AggressiveInlining = 256,
		NoOptimization = 64,
		MaxMethodImplVal = 65535
	}
	export const enum ParameterAttributes {
		None = 0,
		In = 1,
		Out = 2,
		Lcid = 4,
		Retval = 8,
		Optional = 16,
		ReservedMask = 61440,
		HasDefault = 4096,
		HasFieldMarshal = 8192,
		Reserved3 = 16384,
		Reserved4 = 32768
	}
	export const enum PropertyAttributes {
		None = 0,
		SpecialName = 512,
		ReservedMask = 62464,
		RTSpecialName = 1024,
		HasDefault = 4096,
		Reserved2 = 8192,
		Reserved3 = 16384,
		Reserved4 = 32768
	}
	export const enum TypeAttributes {
		VisibilityMask = 7,
		NotPublic = 0,
		Public = 1,
		NestedPublic = 2,
		NestedPrivate = 3,
		NestedFamily = 4,
		NestedAssembly = 5,
		NestedFamANDAssem = 6,
		NestedFamORAssem = 7,
		LayoutMask = 24,
		AutoLayout = 0,
		SequentialLayout = 8,
		ExplicitLayout = 16,
		ClassSemanticsMask = 32,
		Class = 0,
		Interface = 32,
		Abstract = 128,
		Sealed = 256,
		SpecialName = 1024,
		Import = 4096,
		Serializable = 8192,
		WindowsRuntime = 16384,
		StringFormatMask = 196608,
		AnsiClass = 0,
		UnicodeClass = 65536,
		AutoClass = 131072,
		CustomFormatClass = 196608,
		CustomFormatMask = 12582912,
		BeforeFieldInit = 1048576,
		ReservedMask = 264192,
		RTSpecialName = 2048,
		HasSecurity = 262144
	}
}
namespace System.Runtime.InteropServices {
	export const enum LayoutKind {
		Sequential = 0,
		Explicit = 2,
		Auto = 3
	}
}
namespace System.Security {
	export const enum SecurityRuleSet {
		None = 0,
		Level1 = 1,
		Level2 = 2
	}
}

