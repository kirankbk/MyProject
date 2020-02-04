 
 

 

/// <reference path="Enums.ts" />

declare namespace CC.CoreServices.Model {
	interface ApiResult<T> {
		Error: CC.CoreServices.Model.CustomException;
		ErrorCode: string;
		Message: string;
		Object: T;
		Status: boolean;
	}
	interface CustomException extends System.Exception {
	}
}
declare namespace System {
	interface Attribute {
		TypeId: any;
	}
	interface Exception {
		Data: any;
		HelpLink: string;
		HResult: number;
		InnerException: System.Exception;
		Message: string;
		Source: string;
		StackTrace: string;
		TargetSite: System.Reflection.MethodBase;
	}
	interface Guid {
	}
	interface ModuleHandle {
		MDStreamVersion: number;
	}
	interface RuntimeFieldHandle {
		Value: number;
	}
	interface RuntimeMethodHandle {
		Value: number;
	}
	interface RuntimeTypeHandle {
		Value: number;
	}
	interface Type extends System.Reflection.MemberInfo {
		Assembly: System.Reflection.Assembly;
		AssemblyQualifiedName: string;
		Attributes: System.Reflection.TypeAttributes;
		BaseType: System.Type;
		ContainsGenericParameters: boolean;
		DeclaringMethod: System.Reflection.MethodBase;
		DeclaringType: System.Type;
		DefaultBinder: System.Reflection.Binder;
		FullName: string;
		GenericParameterAttributes: System.Reflection.GenericParameterAttributes;
		GenericParameterPosition: number;
		GenericTypeArguments: System.Type[];
		GUID: System.Guid;
		HasElementType: boolean;
		IsAbstract: boolean;
		IsAnsiClass: boolean;
		IsArray: boolean;
		IsAutoClass: boolean;
		IsAutoLayout: boolean;
		IsByRef: boolean;
		IsClass: boolean;
		IsCOMObject: boolean;
		IsConstructedGenericType: boolean;
		IsContextful: boolean;
		IsEnum: boolean;
		IsExplicitLayout: boolean;
		IsGenericParameter: boolean;
		IsGenericType: boolean;
		IsGenericTypeDefinition: boolean;
		IsImport: boolean;
		IsInterface: boolean;
		IsLayoutSequential: boolean;
		IsMarshalByRef: boolean;
		IsNested: boolean;
		IsNestedAssembly: boolean;
		IsNestedFamANDAssem: boolean;
		IsNestedFamily: boolean;
		IsNestedFamORAssem: boolean;
		IsNestedPrivate: boolean;
		IsNestedPublic: boolean;
		IsNotPublic: boolean;
		IsPointer: boolean;
		IsPrimitive: boolean;
		IsPublic: boolean;
		IsSealed: boolean;
		IsSecurityCritical: boolean;
		IsSecuritySafeCritical: boolean;
		IsSecurityTransparent: boolean;
		IsSerializable: boolean;
		IsSpecialName: boolean;
		IsUnicodeClass: boolean;
		IsValueType: boolean;
		IsVisible: boolean;
		MemberType: System.Reflection.MemberTypes;
		Module: System.Reflection.Module;
		Namespace: string;
		ReflectedType: System.Type;
		StructLayoutAttribute: System.Runtime.InteropServices.StructLayoutAttribute;
		TypeHandle: System.RuntimeTypeHandle;
		TypeInitializer: System.Reflection.ConstructorInfo;
		UnderlyingSystemType: System.Type;
	}
}
declare namespace System.Reflection {
	interface Assembly {
		CodeBase: string;
		CustomAttributes: System.Reflection.CustomAttributeData[];
		DefinedTypes: System.Reflection.TypeInfo[];
		EntryPoint: System.Reflection.MethodInfo;
		EscapedCodeBase: string;
		Evidence: any;
		ExportedTypes: System.Type[];
		FullName: string;
		GlobalAssemblyCache: boolean;
		HostContext: number;
		ImageRuntimeVersion: string;
		IsDynamic: boolean;
		IsFullyTrusted: boolean;
		Location: string;
		ManifestModule: System.Reflection.Module;
		Modules: System.Reflection.Module[];
		PermissionSet: any;
		ReflectionOnly: boolean;
		SecurityRuleSet: System.Security.SecurityRuleSet;
	}
	interface Binder {
	}
	interface ConstructorInfo extends System.Reflection.MethodBase {
		MemberType: System.Reflection.MemberTypes;
	}
	interface CustomAttributeData {
		AttributeType: System.Type;
		Constructor: System.Reflection.ConstructorInfo;
		ConstructorArguments: System.Reflection.CustomAttributeTypedArgument[];
		NamedArguments: System.Reflection.CustomAttributeNamedArgument[];
	}
	interface CustomAttributeNamedArgument {
		IsField: boolean;
		MemberInfo: System.Reflection.MemberInfo;
		MemberName: string;
		TypedValue: System.Reflection.CustomAttributeTypedArgument;
	}
	interface CustomAttributeTypedArgument {
		ArgumentType: System.Type;
		Value: any;
	}
	interface EventInfo extends System.Reflection.MemberInfo {
		AddMethod: System.Reflection.MethodInfo;
		Attributes: System.Reflection.EventAttributes;
		EventHandlerType: System.Type;
		IsMulticast: boolean;
		IsSpecialName: boolean;
		MemberType: System.Reflection.MemberTypes;
		RaiseMethod: System.Reflection.MethodInfo;
		RemoveMethod: System.Reflection.MethodInfo;
	}
	interface FieldInfo extends System.Reflection.MemberInfo {
		Attributes: System.Reflection.FieldAttributes;
		FieldHandle: System.RuntimeFieldHandle;
		FieldType: System.Type;
		IsAssembly: boolean;
		IsFamily: boolean;
		IsFamilyAndAssembly: boolean;
		IsFamilyOrAssembly: boolean;
		IsInitOnly: boolean;
		IsLiteral: boolean;
		IsNotSerialized: boolean;
		IsPinvokeImpl: boolean;
		IsPrivate: boolean;
		IsPublic: boolean;
		IsSecurityCritical: boolean;
		IsSecuritySafeCritical: boolean;
		IsSecurityTransparent: boolean;
		IsSpecialName: boolean;
		IsStatic: boolean;
		MemberType: System.Reflection.MemberTypes;
	}
	interface ICustomAttributeProvider {
	}
	interface MemberInfo {
		CustomAttributes: System.Reflection.CustomAttributeData[];
		DeclaringType: System.Type;
		MemberType: System.Reflection.MemberTypes;
		MetadataToken: number;
		Module: System.Reflection.Module;
		Name: string;
		ReflectedType: System.Type;
	}
	interface MethodBase extends System.Reflection.MemberInfo {
		Attributes: System.Reflection.MethodAttributes;
		CallingConvention: System.Reflection.CallingConventions;
		ContainsGenericParameters: boolean;
		IsAbstract: boolean;
		IsAssembly: boolean;
		IsConstructor: boolean;
		IsFamily: boolean;
		IsFamilyAndAssembly: boolean;
		IsFamilyOrAssembly: boolean;
		IsFinal: boolean;
		IsGenericMethod: boolean;
		IsGenericMethodDefinition: boolean;
		IsHideBySig: boolean;
		IsPrivate: boolean;
		IsPublic: boolean;
		IsSecurityCritical: boolean;
		IsSecuritySafeCritical: boolean;
		IsSecurityTransparent: boolean;
		IsSpecialName: boolean;
		IsStatic: boolean;
		IsVirtual: boolean;
		MethodHandle: System.RuntimeMethodHandle;
		MethodImplementationFlags: System.Reflection.MethodImplAttributes;
	}
	interface MethodInfo extends System.Reflection.MethodBase {
		MemberType: System.Reflection.MemberTypes;
		ReturnParameter: System.Reflection.ParameterInfo;
		ReturnType: System.Type;
		ReturnTypeCustomAttributes: System.Reflection.ICustomAttributeProvider;
	}
	interface Module {
		Assembly: System.Reflection.Assembly;
		CustomAttributes: System.Reflection.CustomAttributeData[];
		FullyQualifiedName: string;
		MDStreamVersion: number;
		MetadataToken: number;
		ModuleHandle: System.ModuleHandle;
		ModuleVersionId: System.Guid;
		Name: string;
		ScopeName: string;
	}
	interface ParameterInfo {
		Attributes: System.Reflection.ParameterAttributes;
		CustomAttributes: System.Reflection.CustomAttributeData[];
		DefaultValue: any;
		HasDefaultValue: boolean;
		IsIn: boolean;
		IsLcid: boolean;
		IsOptional: boolean;
		IsOut: boolean;
		IsRetval: boolean;
		Member: System.Reflection.MemberInfo;
		MetadataToken: number;
		Name: string;
		ParameterType: System.Type;
		Position: number;
		RawDefaultValue: any;
	}
	interface PropertyInfo extends System.Reflection.MemberInfo {
		Attributes: System.Reflection.PropertyAttributes;
		CanRead: boolean;
		CanWrite: boolean;
		GetMethod: System.Reflection.MethodInfo;
		IsSpecialName: boolean;
		MemberType: System.Reflection.MemberTypes;
		PropertyType: System.Type;
		SetMethod: System.Reflection.MethodInfo;
	}
	interface TypeInfo extends System.Type {
		DeclaredConstructors: System.Reflection.ConstructorInfo[];
		DeclaredEvents: System.Reflection.EventInfo[];
		DeclaredFields: System.Reflection.FieldInfo[];
		DeclaredMembers: System.Reflection.MemberInfo[];
		DeclaredMethods: System.Reflection.MethodInfo[];
		DeclaredNestedTypes: System.Reflection.TypeInfo[];
		DeclaredProperties: System.Reflection.PropertyInfo[];
		GenericTypeParameters: System.Type[];
		ImplementedInterfaces: System.Type[];
	}
}
declare namespace System.Runtime.InteropServices {
	interface StructLayoutAttribute extends System.Attribute {
		Value: System.Runtime.InteropServices.LayoutKind;
	}
}


