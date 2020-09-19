Imports System

Module Program
    Enum MyEnum
        Monday = 1
        Tuesday = 2
        Wednesday = 3
    End Enum
    Sub Main(args As String())
        Dim x = "monday"
        Dim y = "Monday"

        Dim myEnumNames = [Enum].GetNames(GetType(MyEnum))
        If myEnumNames.Contains(x) Then
            Console.WriteLine(True)
        Else
            Console.WriteLine(False)
        End If
        If myEnumNames.Contains(y) Then
            Console.WriteLine(True)
        Else
            Console.WriteLine(False)
        End If
    End Sub
End Module
